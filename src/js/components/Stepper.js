import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Stepper.scss";
//Steps
import Address from "./Steps/Address";
import OwnerInfo from "./Steps/OwnerInfo";
import Price from "./Steps/Price";
const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    id: this.props.objectDetail.id,
    price: this.props.objectDetail.price,
    place: {
      street: this.props.objectDetail.place.street,
      country: this.props.objectDetail.place.country,
      county: this.props.objectDetail.place.county,
      state: this.props.objectDetail.place.state,
      city: this.props.objectDetail.place.city
    },
    owner: {
      name: this.props.objectDetail.owner.name,
      email: this.props.objectDetail.owner.email,
      tel: this.props.objectDetail.owner.tel
    }
  };
  getSteps() {
    return [
      "Editar direccion de propiedad",
      "Informacion del dueño",
      "Editar Precio"
    ];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Address
            AddressObj={this.state.place}
            streetEdit={e => {
              this.setState({ place: { ...this.state.place, street: e } });
            }}
            countryEdit={e => {
              this.setState({ place: { ...this.state.place, country: e } });
            }}
            countyEdit={e => {
              this.setState({ place: { ...this.state.place, county: e } });
            }}
            stateEdit={e => {
              this.setState({ place: { ...this.state.place, state: e } });
            }}
            cityEdit={e => {
              this.setState({ place: { ...this.state.place, city: e } });
            }}
          />
        );
      case 1:
        return (
          <OwnerInfo
            OwnerObj={this.state.owner}
            nameEdit={e => {
              this.setState({ owner: { ...this.state.owner, name: e } });
            }}
            emailEdit={e => {
              this.setState({ owner: { ...this.state.owner, email: e } });
            }}
            telEdit={e => {
              this.setState({ owner: { ...this.state.owner, tel: e } });
            }}
          />
        );
      case 2:
        return (
          <Price
            PriceObj={this.state.price}
            priceEdit={e => {
              this.setState({ price: e });
            }}
          />
        );
      default:
        return "Unknown step";
    }
  }
  isStepOptional = step => step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("No Puedes saltar este paso, es obligatorio");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper classes={{ root: "stepperCss" }} activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step classes={{ root: "stepCss" }} key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Has terminado de editar los campos
              </Typography>
              <Button
                onClick={() => {
                  this.props.sendData(this.state);
                }}
                className={classes.button}
              >
                Actualizar Informacion
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {this.getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length ? () => {} : this.handleNext
                  }
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
  objectDetail: PropTypes.object,
  sendData: PropTypes.func
};

export default withStyles(styles)(HorizontalLinearStepper);
