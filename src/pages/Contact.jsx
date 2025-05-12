import { useTranslation } from "react-i18next";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.subtitle")}</p>

      <form>
        <input type="text" placeholder={t("contact.form.name")} />
        <input type="email" placeholder={t("contact.form.email")} />
        <textarea placeholder={t("contact.form.message")}></textarea>
        <button type="submit">{t("contact.form.submit")}</button>
      </form>

      <div className="contact-info">
        <p>
          <FaPhoneAlt style={{ marginRight: "8px" }} /> +92 344 2062211
        </p>
        <p>
          <FaEnvelope style={{ marginRight: "8px" }} /> shahidfaqeer02@gmail.com
        </p>
        <p>
          <FaMapMarkerAlt style={{ marginRight: "8px" }} /> Islamabad, Pakistan
        </p>
      </div>
    </section>
  );
}
