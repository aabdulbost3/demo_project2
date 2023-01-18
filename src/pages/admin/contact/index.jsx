import { useContext } from "react";
import { ContactContext } from "../../../context/contact";
import { WrapperTable } from "./styled-index"


function Conatact() {
    const { contactMap } = useContext(ContactContext)

    return (
        <WrapperTable>
            <table>
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            PhoneNumber
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contactMap.map((elem, index) =>
                        <tr key={index}>
                            <th>{index}</th>
                            <th>{elem.email}</th>
                            <th>{elem.phone_number}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </WrapperTable>
    );
}

export default Conatact;