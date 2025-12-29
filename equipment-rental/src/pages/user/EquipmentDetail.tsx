import { useParams } from 'react-router-dom';

export default function EquipmentDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Equipment Detail</h1>
      <p>Showing details for equipment ID: {id}</p>
      <p>Equipment information and rental options will be here</p>
    </div>
  );
}