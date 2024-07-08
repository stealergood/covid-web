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

    const index = formDataProvinsi.findIndex((item) => item.provinsi === capitalizeFirstLetter(name));

    if (index !== -1) {
      const updatedProvinsiData = formDataProvinsi.map((item, idx) => {
        if (idx === index) {
          switch (status.toLowerCase()) {
            case 'positif':
              return { ...item, positif: item.positif + parseInt(quantity) };
            case 'sembuh':
              return { ...item, sembuh: item.sembuh + parseInt(quantity) };
            case 'dirawat':
              return { ...item, dirawat: item.dirawat + parseInt(quantity) };
            case 'meninggal':
              return { ...item, meninggal: item.meninggal + parseInt(quantity) };
            default:
              console.log('Status tidak ditemukan:', status);
              return item;
          }
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
        <StyledLabel htmlFor="provinsiInput">Provinsi</StyledLabel>
        <StyledInput 
          id="provinsiInput"
          type="text"
          name="provinsi"
          value={formData.provinsi}
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
