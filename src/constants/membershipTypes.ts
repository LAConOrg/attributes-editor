export interface MembershipTypeOption {
  label: string;
  value: string;
}

export const MEMBERSHIP_TYPES: MembershipTypeOption[] = [
  { value: "option1", label: "Full Attending Adult (option1)" },
  {
    value: "option2",
    label: "Full Attending Adult - First Worldcon (option2)",
  },
  {
    value: "virtualMembership",
    label: "Virtual Membership (virtualMembership)",
  },
  {
    value: "youngAdultAttending",
    label: "Full Attending Young Adult (youngAdultAttending)",
  },
  { value: "teenAttending", label: "Full Attending Teen (teenAttending)" },
  {
    value: "wsfsMembershipOnly",
    label: "WSFS Membership Only (wsfsMembershipOnly)",
  },
  { value: "childAttending", label: "Child Attending (childAttending)" },
  { value: "kidInTow", label: "Kid in Tow (kidInTow)" },
  {
    value: "voyagerPresupporterUpgradeTo",
    label: "Voyager Pre-supporter (voyagerPresupporterUpgradeTo)",
  },
  {
    value: "navigatorPresupporterVotedIn",
    label: "Navigator Pre-Supporter (navigatorPresupporterVotedIn)",
  },
  {
    value: "wsfsMembershipSiteSelection",
    label:
      "WSFS Membership, voted site selection (wsfsMembershipSiteSelection)",
  },
  {
    value: "presupportAttendingSupplement",
    label:
      "Attending Supplement, Navigator Pre-Supporter (presupportAttendingSupplement)",
  },
];

export const OTHER_OPTION_VALUE = "__OTHER__";
