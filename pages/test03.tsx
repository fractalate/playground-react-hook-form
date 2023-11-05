import { SubmitHandler, useForm } from "react-hook-form";
import '../app/globals.css'; // You have to do this on every page. This seems dumb. There has to be another way to do this.

interface Test03Input {
  input_text: string;
  input_text_area: string;
  input_checkbox: boolean;
  input_color: string;
  input_file: FileList;
  input_date: Date;
  input_time: string;
  input_radio: string;
}

export default function Test03() {
  const { register, watch, handleSubmit } = useForm<Test03Input>();
  const onSubmit: SubmitHandler<Test03Input> = (data) => {
    console.log('submitted:', data);
  };

  console.log(watch())

  return <form onSubmit={ handleSubmit(onSubmit) } className="px-2">
    <div className="py-2">
      <div>
        <label htmlFor="input_text">Text</label>
      </div>
      <div>
        <input type="text" { ...register('input_text') } />
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_text_area">Text Area</label>
      </div>
      <div>
        <textarea { ...register('input_text_area') }></textarea>
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_checkbox">Check Box</label>
      </div>
      <div>
        <input type="checkbox" { ...register("input_checkbox") } />
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_color">Color</label>
      </div>
      <div>
        <input type="color" { ...register("input_color") } />
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_file">File</label>
      </div>
      <div>
        <input type="file" { ...register("input_file") } />
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_date">Date</label>
      </div>
      <div>
        <input type="date" { ...register("input_date") } />
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_time">Time</label>
      </div>
      <div>
        <input type="time" { ...register("input_time") } />
      </div>
    </div>
    <div className="py-2">
      <div>
        <label htmlFor="input_radio">Radio</label>
      </div>
      <div>
        <div>
          <input type="radio" value="option1" { ...register("input_radio") } />
          <span className="px-1">Option 1</span>
        </div>
        <div>
          <input type="radio" value="option2" { ...register("input_radio") } />
          <span className="px-1">Option 2</span>
        </div>
      </div>
    </div>
    <div className="py-2">
      <input type="submit" />
    </div>
  </form>
}
