import { CountUp } from "./CountUp";

const numeric = /^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/;

export function MetricValue({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(numeric);
  if (!match) return <span className={className}>{value}</span>;

  const [, prefix, digits, suffix] = match;
  const to = Number(digits);
  const padded = !digits.includes(".") && digits.startsWith("0") ? digits.length : undefined;

  return (
    <CountUp
      to={to}
      decimals={digits.includes(".") ? digits.split(".")[1].length : 0}
      prefix={prefix}
      suffix={suffix}
      padStart={padded}
      className={className}
    />
  );
}
