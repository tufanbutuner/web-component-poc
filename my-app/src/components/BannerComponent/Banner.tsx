import { type PropsWithChildren } from "react";
import "./Banner.css";

export type BannerType = "success" | "important" | "error";

type Props = {
  type: BannerType;
  header: string;
  content?: string;
};

export const Banner = ({
  type = "success",
  header,
  content,
}: PropsWithChildren<Props>) => {
  const getBannerClass = () => {
    switch (type) {
      case "success":
        return "govuk-notification-banner--success";
      case "important":
        return "govuk-notification-banner--important";
      case "error":
        return "govuk-notification-banner banner-error";
    }
  };

  return (
    <div
      className={`govuk-notification-banner ${getBannerClass()} success-banner-custom-width`}
      role="region"
      aria-labelledby="govuk-notification-banner-title"
      data-module="govuk-notification-banner"
    >
      <div className="govuk-notification-banner__header">
        <h2
          className="govuk-notification-banner__title"
          id="govuk-notification-banner-title"
        >
          {header}
        </h2>
      </div>
      {content && (
        <div className="govuk-notification-banner__content">
          <h3 className="govuk-notification-banner__heading">{content}</h3>
        </div>
      )}
    </div>
  );
};
