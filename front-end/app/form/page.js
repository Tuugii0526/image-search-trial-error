import { seeFormData } from "@/lib/actions";

export default function Page(){
    const seeFormDataWithAddition=seeFormData.bind(null,'addition is here')
    return (
        <form action={seeFormDataWithAddition} className="flex flex-col gap-1 h-fit w-fit ">
            <label htmlFor="name" >
                Name:
            <input type="text" id="name" name="name" className="ring-1"/>
            </label>
            <label htmlFor="age" >
                Age:
            <input type="number" id="age" name="age" className="ring-1"/>
            </label>
            <label htmlFor="email" >
                Email:
            <input type="email" id="email" name="email" className="ring-1"/>
            </label>
            <label htmlFor="hobby" >
                Hobby:
            <input type="text" id="hobby" name="hobby" className="ring-1"/>
            </label>
            <label htmlFor="first-name" >
                First name:
            <input type="text" id="first-name" name="first-name" className="ring-1"/>
            </label>
            <label htmlFor="last-name" >
                Last name:
            <input type="text" id="last-name" name="last-name" className="ring-1"/>
            </label>
            <button type="submit ring-1"> Add</button>
        </form>
    )
}