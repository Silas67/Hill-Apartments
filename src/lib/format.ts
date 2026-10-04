export const formatNaira = (n: number | null | undefined) =>
  n == null ? "" : `₦${Number(n).toLocaleString("en-NG")}`;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
