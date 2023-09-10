import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const doctor = 'Krishnendu Nanda';

const logics = [
    {
      label: 'Every Week',
      value: 'weekly',
    },
    {
      label: 'Every 4 Week',
      value: 'monthly',
    },
    {
      label: 'Custom Date',
      value: 'others',
    },
];

const weeks = [
    {
      label: '1st Week',
      value: '1',
    },
    {
      label: '2nd Week',
      value: '2',
    },
    {
      label: '3rd Week',
      value: '3',
    },
];

const days = [
    {
      label: 'Sunday',
      value: '1',
    },
    {
      label: 'Monday',
      value: '2',
    },
    {
      label: 'Tuesday',
      value: '3',
    },
    {
      label: 'Wednesday',
      value: '4',
    },
    {
      label: 'Thursday',
      value: '5',
    },
    {
      label: 'Friday',
      value: '6',
    },
    {
      label: 'Saturday',
      value: '7',
    },
];

function MyForm() {
  const [formData, setFormData] = useState({
    fee: 0,
    logic: 'weekly',
    week: 0,
    day: 0,
    start: "00:00",
    end: "00:00",
  });

  const [formArray, setFormArray] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormObject = { ...formData };

    setFormArray([...formArray, newFormObject]);

    console.log("Fee: ",formData['fee']);
    console.log("Slots:",formArray);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      onSubmit={handleSubmit}
      className='py-5 px-2'
    >
    <h3 className='text-3xl mb-5'>{doctor}</h3>
    <div>---- Appoinments ----</div>
    <div>
        <TextField
          label="Consultation Fee"
          defaultValue="0"
          type="number"
          name="fee"
          id='fee'
          value={formData.fee}
          onChange={handleChange}
        />
    </div>

      <div>
      <TextField
          id="outlined-select-currency-native"
          select
          label="Repeat Period"
          defaultValue="weekly"
          name="logic"
          value={formData.logic}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {logics.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

      <div>
      <TextField
          id="outlined-select-currency-native"
          select
          label="Select Week"
          defaultValue="0"
          name="week"
          value={formData.week}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {weeks.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>


      <div>
      <TextField
          id="outlined-select-currency-native"
          select
          label="Select Day"
          defaultValue="0"
          name="day"
          value={formData.day}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {days.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

    <div className='flex justify-center mb-10'>
        <div className='w-[15rem] ml-1'>
        <label htmlFor="start" className="block text-gray-700 text-left text-[12px]">Start Time</label>
        <input
          type="time"
          id="start"
          name="start"
          value={formData.start}
          onChange={handleChange}
          className="border rounded px-3 py-2 mr-1 w-full"
        />
      </div>
      <div className='w-[15rem] ml-1 mr-1'>
      <label htmlFor="end" className="block text-gray-700 text-left text-[12px]">End Time:</label>
        <input
          type="time"
          id="end"
          name="end"
          value={formData.end}
          onChange={handleChange}
          className="border rounded px-3 py-2 mr-1 w-full"
        />
      </div>
      </div>
      

      <Button type="submit" variant="contained" className='w-[30rem]'>Submit</Button>
    </Box>
  );
}

export default MyForm;
