import { useState, useContext } from 'react';
import FormCovidContext from '../../context/FormCovidContext';
import { StyledButton, StyledForm, StyledInput, StyledInputGroup, StyledLabel } from './FormInput.styled';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function FormInput() {
  const { formDataProvinsi, setFormDataProvinsi } = useContext(FormCovidContext);
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    quantity: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, status, quantity } = formData;
    const provinsiName = capitalizeFirstLetter(name);

    const index = formDataProvinsi.findIndex((item) => item.name === provinsiName);

    if (index !== -1) {
      const updatedProvinsiData = formDataProvinsi.map((item, idx) => {
        if (idx === index) {
          const newNumbers = { ...item.numbers };
          switch (status.toLowerCase()) {
            case 'positif':
              newNumbers.confirmed += parseInt(quantity);
              break;
            case 'sembuh':
              newNumbers.recovered += parseInt(quantity);
              break;
            case 'dirawat':
              newNumbers.treatment += parseInt(quantity);
              break;
            case 'meninggal':
              newNumbers.death += parseInt(quantity);
              break;
            default:
              console.log('Status tidak ditemukan:', status);
              return item;
          }
          return { ...item, numbers: newNumbers };
        }
        return item;
      });
      setFormDataProvinsi(updatedProvinsiData);
    } else {
      console.log('Provinsi tidak ditemukan:', name);
    }

    setFormData({
      name: '',
      status: '',
      quantity: ''
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <StyledLabel htmlFor="nameInput">Provinsi</StyledLabel>
        <StyledInput 
          id="nameInput"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor="statusInput">Status</StyledLabel>
        <StyledInput 
          id="statusInput"
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor="quantityInput">Jumlah</StyledLabel>
        <StyledInput 
          id="quantityInput"
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </StyledInputGroup>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
