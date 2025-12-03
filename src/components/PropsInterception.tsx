/** THIS ONLY RENDERS WHEN PROPS CHANGE */

export default function PropsInterception({ condition }: { condition: boolean }) {
  console.log('Interception RENDERED');
  return (
    <>
      <br />
      <br />
      <br />
      {condition ? (
        <p style={{ color: 'green' }}>MET CONDITION</p>
      ) : (
        <p style={{ color: 'red' }}>DID NOT MEAT CONDITION</p>
      )}
    </>
  );
}
