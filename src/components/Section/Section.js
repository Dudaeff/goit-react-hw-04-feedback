import { SectionTitle, Layout } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Layout>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Layout>
  );
};
