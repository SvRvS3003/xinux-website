"use client";

import { Cards } from "nextra/components";
import { useState, useEffect } from "react";
import LogoMark from "./LogoMark";

type Build = { name: string; link: string };
type DownloadState = { loading: boolean; result: Build | null; error: boolean };

async function hydraFetch<T>(url: string): Promise<T> {
  const res = await fetch(`/api/hydra?url=${encodeURIComponent(url)}`);
  return res.json();
}

async function fetchEvals(link: string): Promise<number | null> {
  const json = await hydraFetch<{ builds?: number[] }>(link);

  if (json.builds && json.builds.length > 0) {
    return json.builds[0];
  }
  return null;
}

async function fetchBuild(buildId: number, type: string): Promise<Build | null> {
  const buildURL = `https://hydra.xinux.uz/build/${buildId}`;
  const json = await hydraFetch<{ nixname?: string }>(buildURL);

  if (!json || !json?.nixname) return null;

  const version = json?.nixname?.match(/([\d]+\.[\d]+)/)?.[0];
  const date = json?.nixname?.match(/(\d{8})/)?.[0]?.replace(/(\d{4})(\d{2})(\d{2})/, "$3.$2.$1");
  const system = json?.nixname?.match(/-([a-z\d_]+)-/)?.[1];

  const name = `Xinux ${version} ${system} ${type} (${date})`;
  const link = `https://hydra.xinux.uz/build/${buildId}/download/1/${json?.nixname}`;

  return { name, link };
}

function Download({
  link,
  error = "Xatolik yuz berdi!",
  empty = "Hali %t chiqarilmaganga o'xshaydi",
  type = "stabil",
}: {
  link: string;
  error?: string;
  empty?: string;
  type?: string;
}) {
  const [state, setState] = useState<DownloadState>({ loading: true, result: null, error: false });

  useEffect(() => {
    (async () => {
      try {
        const buildId = await fetchEvals(link);

        if (!buildId) {
          setState({ loading: false, result: null, error: false });
          return;
        }

        const result = await fetchBuild(buildId, type);

        if (!result) {
          setState({ loading: false, result: null, error: true });
          return;
        }

        setState({ loading: false, result, error: false });
      } catch {
        setState({ loading: false, result: null, error: true });
      }
    })();
  }, [link, type]);

  if (state.loading) {
    return <Cards.Card icon={<LogoMark />} title="Yuklanmoqda..." href="#" />;
  }

  if (state.error) {
    return (
      <Cards.Card
        icon={<LogoMark />}
        title={error}
        href="https://git.oss.uzinfocom.uz/xinux/website/issues"
      />
    );
  }

  if (!state.result) {
    return <Cards.Card icon={<LogoMark />} title={empty.replace("%t", type)} href="#" />;
  }

  return <Cards.Card icon={<LogoMark />} title={state.result.name} href={state.result.link} />;
}

export default function Downloads() {
  return (
    <Cards>
      <Download link="https://hydra.xinux.uz/jobset/installer/stable/latest-eval" />
      <Download
        link="https://hydra.xinux.uz/jobset/installer/unstable/latest-eval"
        type="nostabil"
      />
    </Cards>
  );
}
