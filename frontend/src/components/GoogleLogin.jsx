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
                theme: "outline",
                size: "large",
                width: 350,
                text: "continue_with",
            }
        );
    }, [onSuccess]);

    return <div ref={googleButtonRef}></div>;
};

export default GoogleLogin;