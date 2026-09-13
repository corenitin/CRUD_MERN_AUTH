import { useEffect, useRef } from "react";

const GoogleLogin = ({ onSuccess }) => {
    const googleButtonRef = useRef(null);

    useEffect(() => {
        if (!window.google) {
            console.error("Google Identity Services not loaded");
            return;
        }

        window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

            callback: (response) => {
                onSuccess(response.credential);
            },
        });

        window.google.accounts.id.renderButton(
            googleButtonRef.current,
            {
                theme: "filled_black",
                size: "large",
                width: 340,
                shape: "rectangular",
                text: "continue_with",
            }
        );
    }, [onSuccess]);

    return <div ref={googleButtonRef} className="mt-6 flex justify-center"></div>;
};

export default GoogleLogin;