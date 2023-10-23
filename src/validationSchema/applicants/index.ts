import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  resume: yup.string().required(),
  cover_letter: yup.string().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  job_posting_id: yup.string().nullable().required(),
});
