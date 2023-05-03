import PersonalInfo from "@/components/health-form/personal-info";
import withForm from "@/hoc/withForm";

const Component = () => {
  return <PersonalInfo />;
};

Component.display = "PersonalInfo";

export default withForm(Component);
