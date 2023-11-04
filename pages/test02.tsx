import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import '../app/globals.css'; // You have to do this on every page. This seems dumb. There has to be another way to do this.

interface Inputs {
  nickname: string,
}

export default function Test02() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [selectedNickname, setSelectedNickname] = useState('');
  const showForm = selectedNickname == '';

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSelectedNickname(data.nickname);
  }

  return <div className="p-1">
    {showForm && <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nickname" className={ errors.nickname ? "text-red-500" : "" }>Nickname</label>
      </div>
      <div>
        <input {...register("nickname", { required: true })} />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>}
    {selectedNickname != '' && <div>
      <div>Your Nickname is {selectedNickname}.</div>
    </div>}
  </div>
}
