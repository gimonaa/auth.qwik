import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { useSession, useSignIn } from '~/routes/plugin@auth';
 
export default component$(() => {
  const session = useSession()
  const signIn = useSignIn();
  console.log("login - session:",session.value)
  return (
    <Form action={signIn}>
      <input type="hidden" name="callbackUrl" value=""></input>  
      <input name="email" value="mike@example.com" />
      <input name="password" type="password" value="" />
      <button>Sign In</button>
    </Form>
  );
});
