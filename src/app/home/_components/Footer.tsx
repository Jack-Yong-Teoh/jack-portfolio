import { useTranslate } from "@tolgee/react";

const FooterSection = () => {
  const { t } = useTranslate();

  return (
    <footer className="home__footer">
      <p className="home__footer-text">
        © {new Date().getFullYear()} Jack. {t("footer.rights_reserved")}
      </p>
    </footer>
  );
};

export default FooterSection;
