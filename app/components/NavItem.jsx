import Link from "next/link";

export default function NavItem({ label, dataTest, path }) {
  return (
    <Link href={path} data-test={dataTest}>
      {label}
    </Link>
  );
}
