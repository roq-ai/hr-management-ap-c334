import * as yup from 'yup';

export const jobPostingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  requirements: yup.string().required(),
  hr_manager_id: yup.string().nullable().required(),
});
