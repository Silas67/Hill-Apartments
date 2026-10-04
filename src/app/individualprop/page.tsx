import { permanentRedirect } from "next/navigation";

// Listings now live at /properties/[id]. Keep the old URL working.
export default function IndividualPropRedirect() {
  permanentRedirect("/properties");
}
