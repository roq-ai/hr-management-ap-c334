interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own application',
    'Read job postings',
    'Update personal information',
    'Create application for job posting',
  ],
  ownerAbilities: [
    'Manage training data',
    'Manage benefits data',
    'Manage performance review data',
    'Manage schedules',
    'Manage departments',
    'Manage positions',
    'Manage users',
    'Manage teams',
    'Manage job postings',
    'Manage applicants',
    'Manage employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ed625ad8-190f-46e7-95ea-506f716f000c',
};
