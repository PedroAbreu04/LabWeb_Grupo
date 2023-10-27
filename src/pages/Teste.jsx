import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';


const CssDatePicker = styled(DatePicker)({
  '& label': {
    color: '#FFF',
  },
  '& label.Mui-focused': {
    color: 'rgba(2, 175, 255, 0.8)',
  },
  '& .MuiInputBase-input': {
    color: '#FFF',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(255, 255, 255, 0.5)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(255, 255, 255, 0.5)',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(2, 175, 255, 0.8)',
    },
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
});

export default function DatePickerViews() {
  const handleDateChange = (date) => {
    console.log(date.$y)
    console.log(date.$M + 1)
  };


  return (

    <div style={{ width: '100%' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <CssDatePicker
            label={'mês e ano'}
            views={['month', 'year']}
            onChange={handleDateChange}
            fullWidth
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}