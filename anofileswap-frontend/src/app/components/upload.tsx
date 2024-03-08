
async function file(formData: FormData){
    "use server"
    const file = formData.get("file") as File;
    console.log("File name: ", file.name, ", size: ", file.size);
    
}

export default async function Upload() {
    return (
        <form action={file}>
            <label htmlFor="file">File </label>
            <input type="file" name="file" id="file"/>
            <button type="submit" id="upload">Upload file</button>
        </form>
    )
}