import HealthRecord from "@/components/health-form/health-record";
import withForm from "@/hoc/withForm";

const Component = () => {
  return <HealthRecord />;
};

Component.display = "HealthRecord";

export default withForm(Component);
