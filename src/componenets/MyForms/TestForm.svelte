
  <script>
     import { TextInput, TextArea, Button, FormGroup, Form } from "carbon-components-svelte";
     import { Grid, Row, Column } from "carbon-components-svelte";
		import { createForm } from "svelte-forms-lib";
        import * as yup from "yup";
   
        const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().email().required('Please enter a valid email'),
        message: yup.string().required('Please enter a message')
    });
   
        const { form, errors, handleChange, handleSubmit, isSubmitting,handleReset  } = createForm({
        initialValues: { name: "", email: "", message: "" },
        validationSchema: validationSchema,
        onSubmit: async values => {
            alert(JSON.stringify(values));
      }
    });


   




  
  </script>
<Grid narrow>
    
    
    
  
  
<Form on:submit={handleSubmit}>
    <Row>
        <Column>
    <FormGroup>
        <TextInput labelText="Name" name="name" 
            on:change={handleChange} bind:value={$form.name}
            invalid={$errors.name.length > 0} invalidText={$errors.name}/>
    </FormGroup>
</Column>

<Column>
    <FormGroup>
        <TextInput labelText="Email" name="email" type="email" 
            on:change={handleChange} bind:value={$form.email}
            invalid={$errors.email.length > 0} invalidText={$errors.email}/>
    </FormGroup>
</Column>
</Row>
    
    <FormGroup>
        <TextArea labelText="Message" name="message" type="textarea"
            on:change={handleChange} bind:value={$form.message}
            invalid={$errors.message.length > 0} invalidText={$errors.message}/>
    </FormGroup>


    <Button type="submit" disabled={$isSubmitting}>Submit</Button>
</Form>

</Grid>