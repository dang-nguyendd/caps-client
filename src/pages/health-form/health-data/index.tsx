import withForm from "@/hoc/withForm";
import PersonalInfo from "src/components/health-form/health-data";

const Component = () => {
  return <PersonalInfo />;
};

Component.display = "PersonalInfo";

export default withForm(Component);
