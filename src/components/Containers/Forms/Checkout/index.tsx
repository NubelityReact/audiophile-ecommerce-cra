import { SubmitHandler, useForm } from "react-hook-form";
import InputText from "../../../Input/Text";
import Typography from "../../../Typography";
import Button from "../../../Button/Base";
import InputRadio, { IRadioOption } from "../../../Input/Radio";
import {
  BaseSyntheticEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./form.checkout.styles.module.css";
import ModalOrderConfirmation from "../../../Modal/OrderConfirmation";

export interface IFormCheckout {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: string;
  emoneyNumber: string;
  emoneyPin: string;
}

export type ISubmitFormCheckoutCb = (
  e?: BaseSyntheticEvent<object, any, any> | undefined,
) => Promise<void>;

export interface IFormCheckoutRef {
  onSubmit: () => void;
}

const FormCheckout = forwardRef<IFormCheckoutRef, any>((_, ref) => {
  const {
    register,
    formState: { errors },

    handleSubmit,
    watch,
  } = useForm<IFormCheckout>();

  const [paymentOptions, setPaymentOptions] = useState<IRadioOption[]>([]);
  const [isOpen, setModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const selectedPaymentMethod = watch("paymentMethod");

  const onSubmit: SubmitHandler<IFormCheckout> = (data) => {
    // enviar al backend los datos del formulario
    console.log({ data });

    window.scrollTo(0, 0);
    setModalOpen(true);
  };

  useImperativeHandle(ref, () => ({
    onSubmit: () =>
      formRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      ),
  }));

  useEffect(() => {
    window
      .fetch("endpoint payment options")
      .then((res) => res.json())
      .then(setPaymentOptions)
      .catch(() => {
        const backendOptions = [
          {
            id: "emoney",
            label: "e-money",
          },
          {
            id: "cash",
            label: "Cash on Delivery",
          },
        ];

        setPaymentOptions(backendOptions);
      });
  }, []);

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <Typography variant="subtitle" className={styles.title}>
          Billing details
        </Typography>
        <InputText
          label="name"
          placeholder="Alexei Ward"
          {...register("name", {
            required: "Este campo es requerido",
            minLength: {
              value: 2,
              message: "Debe contener al menos 2 caracteres",
            },
          })}
          error={errors.name}
        />
        <InputText
          label="Email Address"
          placeholder="user@email.com"
          {...register("email", {
            required: "Este campo es requerido",
            pattern: {
              value: /\w+@\w+\.\w{2,3}/,
              message: "Debe ser un correo válido",
            },
          })}
          error={errors.email}
        />
        <InputText
          label="Phone number"
          placeholder="9875643210"
          {...register("phone", {
            required: "Este campo es requerido",
            pattern: {
              value: /[0-9]{10}/,
              message: "Deben ser 10 dígitos",
            },
          })}
          error={errors.phone}
        />

        <Typography variant="subtitle" className={styles.title}>
          Shipping info
        </Typography>
        <InputText
          label="Your address"
          placeholder="1137 Williams Avenue"
          {...register("address", {
            required: "Este campo es requerido",
          })}
          error={errors.address}
        />
        <InputText
          label="ZIP code"
          placeholder="10001"
          {...register("zip", {
            required: "Este campo es requerido",
            pattern: {
              value: /[0-9]{5,6}/,
              message: "Deben ser un zip válido",
            },
          })}
          error={errors.zip}
        />
        <InputText
          label="City"
          placeholder="New York"
          {...register("city", {
            required: "Este campo es requerido",
          })}
          error={errors.city}
        />
        <InputText
          label="Country"
          placeholder="United States"
          {...register("country", {
            required: "Este campo es requerido",
          })}
          error={errors.country}
        />

        <Typography variant="subtitle" className={styles.title}>
          Payment details
        </Typography>

        <InputRadio options={paymentOptions} {...register("paymentMethod")} />
        {selectedPaymentMethod === "emoney" && (
          <>
            <InputText
              label="e-Money Number"
              placeholder="238521993"
              {...register("emoneyNumber", {
                required: "Este campo es requerido",
                pattern: {
                  value: /\d/,
                  message: "Solo se permiten números",
                },
              })}
              error={errors.emoneyNumber}
            />
            <InputText
              label="e-Money PIN"
              placeholder="****"
              type="password"
              {...register("emoneyPin", {
                required: "Este campo es requerido",
                pattern: {
                  value: /\d{4,8}/,
                  message: "Debe ser un pin válido",
                },
              })}
              error={errors.emoneyPin}
            />
          </>
        )}
      </form>

      <ModalOrderConfirmation
        isOpen={isOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
});

export default FormCheckout;
