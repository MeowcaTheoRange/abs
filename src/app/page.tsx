import HitsList from "@/components/HitsList/HitsList";

export default function Home() {
  const domain = `${process.env.SUBDOMAIN_NAME}.${process.env.DOMAIN_NAME}.${process.env.TOPLEVEL_DOMAIN_NAME}`;
  return (
    <>
      <h1>{process.env.WHOAMI}</h1>
      <hr />
      <p>A link normalizer for personal use.</p>
      <p>
        <code>{domain}</code>
      </p>
      <HitsList tld={process.env.TOPLEVEL_DOMAIN_NAME as string} />
    </>
  );
}
