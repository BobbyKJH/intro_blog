export const scrollValue = (
  e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
) => {
  const { id } = e.currentTarget;
  switch (id) {
    case "intro-btn":
      return document
        .querySelector("#intro")
        ?.scrollIntoView({ behavior: "smooth" });

    case "tech-btn":
      return document
        .querySelector("#tech")
        ?.scrollIntoView({ behavior: "smooth" });

    case "storage-btn":
      return document
        .querySelector("#storage")
        ?.scrollIntoView({ behavior: "smooth" });

    case "project-btn":
      return document
        .querySelector("#project")
        ?.scrollIntoView({ behavior: "smooth" });

    default:
      return window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
