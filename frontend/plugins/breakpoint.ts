function getBreakPoint(): "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined {
  const w = Math.max(
    document?.documentElement?.clientWidth || 0,
    window?.innerWidth || 0
  );
  if (!w) return;
  else if (w >= 1536) return "2xl";
  else if (w >= 1280) return "xl";
  else if (w >= 1024) return "lg";
  else if (w >= 768) return "md";
  else if (w >= 640) return "sm";
  else return "xs";
}

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.provide("getBreakPoint", getBreakPoint);
});
