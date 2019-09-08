const general = (resource, action) =>
  `${resource} has been ${action} successfully`;

export const deleted = resource => general(resource, 'deleted');
export const created = resource => general(resource, 'created');
export const updated = resource => general(resource, 'updated');

export const exists = resource => `${resource} already exists`;
export const notExists = resource => `${resource} does not exist`;
export const alreadyExists = resource => `${resource} already exist`;
export const unauthorized = () => 'Unauthorized access';
export const notAllowed = (resource, action) =>
  `${resource} not allowed to ${action}`;
