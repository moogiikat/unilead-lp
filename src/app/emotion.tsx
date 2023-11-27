"use client";

import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import React from "react";

export const RootStyleRegistry: React.FCC = ({ children }) => {
  const cache = useEmotionCache();
  cache.compat = true;
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));
  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          components: {
            DatePicker: {
              styles: () => ({
                input: { height: 48 },
              }),
            },
            MultiSelect: {
              styles: () => ({
                values: {
                  height: 48,
                },
              }),
            },
            Select: {
              styles: () => ({
                input: { height: 48 },
              }),
            },
            TextInput: {
              styles: () => ({
                input: { height: 48 },
              }),
            },
            Pagination: {
              styles: (theme) => ({
                control: {
                  "&[data-active]": {
                    backgroundImage: theme.fn.gradient({
                      from: "red",
                      to: "yellow",
                    }),
                  },
                },
              }),
            },
          },
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
};
