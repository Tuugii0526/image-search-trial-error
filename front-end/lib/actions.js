'use server'

export async function seeFormData(addition,formData){

    let rawFormData=Object.fromEntries(formData)
    console.log('addition is:',addition);
    
    console.log('raw form data:',rawFormData);
    
}