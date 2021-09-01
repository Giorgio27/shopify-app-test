import { Page, Avatar, TextContainer } from "@shopify/polaris";
import Link from "next/link";

const Index = () => (
  <Page fullWidth>
    <TextContainer>
      <Avatar customer name="Farrah" />
      <p>Shopify app with Node and React 🎉!!!</p>
      <Link href="/about">salve</Link>
    </TextContainer>
  </Page>
);

export default Index;
