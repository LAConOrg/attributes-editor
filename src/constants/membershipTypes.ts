export interface MembershipTypeOption {
  label: string;
  value: string;
}

export const MEMBERSHIP_TYPES: MembershipTypeOption[] = [
  { value: "option1", label: "Full Attending Adult" },
  { value: "option2", label: "Full Attending Adult - First Worldcon" },
  {
    value: "youngAdultAttending",
    label: "Full Attending Young Adult (ages 18-24)",
  },
  { value: "teenAttending", label: "Full Attending Teen (ages 13-17)" },
  { value: "childAttending", label: "Child Attending (ages 6-12)" },
  {
    value: "kidInTow",
    label: "Kid in Tow (ages 0-5, requires adult registration)",
  },
  {
    value: "wsfsMembershipOnly",
    label: "WSFS Membership Only (no convention activities)",
  },
  { value: "virtualMembership", label: "Virtual (Online) Membership" },
  {
    value: "wsfsMembershipSiteSelection",
    label: "WSFS Membership, voted site selection",
  },
  {
    value: "voyagerPresupporterUpgradeTo",
    label:
      "Voyager Pre-supporter, Upgrade to Full Attending Membership + WSFS Membership",
  },
];

export const OTHER_OPTION_VALUE = "__OTHER__";
