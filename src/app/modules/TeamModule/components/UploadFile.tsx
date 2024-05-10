import { FunctionComponent } from "react";
import { FormikErrors } from "formik";

interface IUploadFile {
    data: { image?: File };
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<{ image?: File }>> | Promise<void>;
    errors: FormikErrors<{ image?: File }>;
}

const UploadFile: FunctionComponent<IUploadFile> = ({
    data,
    setFieldValue,
    errors
}) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const filename = "1708531558911-Artimenner1.png";
    return (
        <div>
            <img src={`${apiUrl}/uploads/${filename}`} alt="Avatar not found" />
            <input
                type="file"
                name="image"
                // set supported file types here,
                // could also check again within formik validation or backend
                accept="image/png, .svg"
                onChange={(e) => {
                    // Object is possibly null error w/o check
                    if (e.currentTarget.files) {
                        setFieldValue("image", e.currentTarget.files[0]);
                    }
                }}
            />
            {errors.image && (
                <>
                    <br />
                    <span id="error">{errors.image}</span>
                    <br />
                </>
            )}
        </div>
    );
};

export default UploadFile;
