import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

// export function renderField(field){
//     return(
//         <TextField
//           {...field.input}
//           {...field}
//         />
//     );
// }

// ({
//   input,
//   label,
//   meta: { touched, error },
//   children,
//   ...custom
// }) 

export const renderField = props =>{
      return (
        <span>
        <TextField
          error={props.meta.touched && !!props.meta.error}
          {...props.input}
          {...props}
          required={props.required}
        />
        {props.meta.touched && !!props.meta.error && <FormHelperText error>{props.meta.error}</FormHelperText>}
        </span>
      )
} 

export const renderSelectField = ({
    input,
    label,
    children,
    required,
    ...custom
  }) =>{
      return (
        <FormControl error={custom.meta.touched && !!custom.meta.error}>
          <InputLabel htmlFor="name-error">{label}</InputLabel>
          <Select
            {...input}
            required={required}
            children={children}
            {...custom}
          />
          {custom.meta.touched && !!custom.meta.error && <FormHelperText error>{custom.meta.error}</FormHelperText>}
        </FormControl>
      )
}