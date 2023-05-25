import React from 'react';
import { FieldArray } from 'formik';
import {
  Container,
  Text,
  DishImage,
  Input,
  ContentWrapper,
} from './DishCounter.styled';

export const DishCounter = ({
  orders: { image, title, price, id },
  values,
}) => {
  return (
    <Container>
      <DishImage src={image} alt={title} />
      <ContentWrapper>
        <Text>{title}</Text>
        <Text>{price} </Text>
        <FieldArray name="dishes">
          {() => (
            <div>
              {values.dishes.map((_, index) => (
                <div key={index}>
                  <Input type="number" name={`dishes.${index}`} />
                </div>
              ))}
            </div>
          )}
          {/* <Input type="number" name={title} /> */}
        </FieldArray>
      </ContentWrapper>
    </Container>
  );
};

// import { Formik, Field, FieldArray } from 'formik';
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Button,
// } from '@mui/material';
// import { TextField } from 'formik-material-ui';
// import { FormStepper } from './FormStepper';

// const App = () => {
//   const linksGroup = { linkname: '', linkurl: '' };

//   return (
//     <Formik
//       initialValues={{
//         firstname: '',
//         lastname: '',
//         links: [linksGroup],
//       }}
//     >
//       {({ values }) => (
//         <FormStepper>
//           <FieldArray name="links">
//             {({ push, remove }) => (
//               <Grid container>
//                 {values.links.map((_, index) => (
//                   <>
//                     <Field
//                       fullWidth
//                       name={`links.${index}.linkname`}
//                       component={TextField}
//                       label="Link Name"
//                     />

//                     <Field
//                       fullWidth
//                       name={`links.${index}.linkurl`}
//                       component={TextField}
//                       label="Link URL"
//                     />
//                   </>
//                 ))}
//               </Grid>
//             )}
//           </FieldArray>
//         </FormStepper>
//       )}
//     </Formik>
//   );
// };

// export default App;
