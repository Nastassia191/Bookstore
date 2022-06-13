import React, { useState } from 'react';
import FormValuesType from '../../types/formValuesType';
import useTranslete from '../hooks/useTranslete';
import Button from '../ui/button/Button';
import FormCard from '../ui/formCard/FormCard';
import FormTextField from '../ui/formTextField/FormTextField';

import './Registration.scss';




const Registration: React.FC = () => {


  const [values, setValues] = useState<FormValuesType>({});
  const { t } = useTranslete();



  const handleSubmint = () => {
    console.log(values);
  }

  return (
    <div className="centre__content">
      <FormCard header="Registration">
        <FormTextField
          autofocus={true}
          label={t("login.name")}
          name='name'
          values={values}
          setValues={setValues}
        />

        <FormTextField
          label={t("login.email")}
          type='email'
          name='email'
          values={values}
          setValues={setValues}
        />

        <FormTextField
          label={t("login.password")}
          type='password'
          name='password'
          values={values}
          setValues={setValues}
        />
        <FormTextField
          label={t("login.confirmPassword")}
          type='password'
          name='confirmPassword'
          values={values}
          setValues={setValues}
        />



        <Button onClick={handleSubmint}>
          Registration
        </Button>
      </FormCard>
    </div>
  )
}

export default Registration;