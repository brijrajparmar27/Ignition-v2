import { useContext } from "react";
import { LinkContext } from "../../Contexts/LinkContext";

const useLinks = () => {
  const { links, setLinks } = useContext(LinkContext);
  return { links, setLinks };
};

export default useLinks;
