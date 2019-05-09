import React, { Component } from 'react';

// TODO: fix svg images

class FormCard extends Component {
  render() {
    return (
      <div className="ui-form-card ui-card ui-form-card--collapsed">
        <div className="ui-form-card__content">
          <div className="ui-form-card__header">
            <div className="ui-form-card__progress-ring">
              <div className="ui-progress-ring slds-progress-ring slds-progress-ring_complete">
                <div
                  className="slds-progress-ring__progress"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="100"
                >
                  {'progree ring'}
                </div>
                <div className="slds-progress-ring__content">
                  <span
                    className="slds-icon_container slds-icon-utility-check"
                    title="Complete"
                  >
                    <svg className="slds-icon" aria-hidden="true">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                      />
                    </svg>
                    <span className="slds-assistive-text">Complete</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="ui-form-card__title-panel">
              <div className="ui-form-card__header-title">
                Define entity structure and activities
              </div>
              <div className="ui-form-card__header-subtitle">
                A description here on this line right here. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </div>
            </div>

            <div className="ui-form-card__time">about 10 min</div>
          </div>

          <form className="ui-form ui-form-card__form">
            <div className="slds-progress slds-progress_vertical">
              <ol className="form__list slds-progress__list">
                <li className="form__list-item slds-progress__item slds-is-completed">
                  <span
                    className="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
                    title="Complete"
                  >
                    <img
                      src="/assets/svg/progress-ring-complete.svg"
                      alt="complete icon"
                      className="icon-image"
                    />
                    <span className="slds-assistive-text">Complete</span>
                  </span>
                  <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
                    <div className="ui-form-element slds-form-element">
                      <label
                        className="ui-form-element__label slds-form-element__label"
                        for="text-input-id-1"
                      >
                        <span className="ui-form-element__label-name">
                          What is your entity's name?
                        </span>

                        <span className="ui-form-element__label-description">
                          Don't worry. You will be able to change your name
                          later if you need.
                        </span>
                      </label>
                      <div className="ui-form-element__control slds-form-element__control">
                        <input
                          id="text-input-id-1"
                          className="ui-form-element__control-input slds-input"
                          type="text"
                          placeholder="Type something..."
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="form__list-item slds-progress__item slds-is-active">
                  <div className="slds-progress__marker">
                    <span className="slds-assistive-text">Active</span>
                  </div>
                  <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
                    <div className="ui-form-element slds-form-element">
                      <label
                        className="ui-form-element__label slds-form-element__label"
                        for="text-input-id-1"
                      >
                        <span className="ui-form-element__label-name">
                          Are you a financial company?
                        </span>

                        <span className="ui-form-element__label-description">
                          A finanacial company is a bank, investment business or
                          similar.
                        </span>
                      </label>
                      <div className="ui-form-element__control slds-form-element__control">
                        <input
                          id="text-input-id-1"
                          className="ui-form-element__control-input slds-input"
                          type="text"
                          placeholder="Type something..."
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="form__list-item slds-progress__item">
                  <div className="slds-progress__marker" />
                  <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
                    <div className="ui-form-element slds-form-element">
                      <label
                        className="ui-form-element__label slds-form-element__label"
                        for="text-input-id-1"
                      >
                        <span className="ui-form-element__label-name">
                          What business sector are you in?
                        </span>

                        <span className="ui-form-element__label-description">
                          Tell us what sector you work in
                        </span>
                      </label>
                      <div className="ui-form-element__control slds-form-element__control">
                        <input
                          id="text-input-id-1"
                          className="ui-form-element__control-input slds-input"
                          type="text"
                          placeholder="Type something..."
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="form__list-item slds-progress__item">
                  <div className="slds-progress__marker" />
                  <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
                    <div className="form-control-group">
                      {'TODO: add picklist'}
                    </div>
                  </div>
                </li>
                <li className="form__list-item slds-progress__item">
                  <div className="slds-progress__marker" />
                  <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
                    <div className="ui-form-element slds-form-element">
                      <label
                        className="ui-form-element__label slds-form-element__label"
                        for="text-input-id-1"
                      >
                        <span className="ui-form-element__label-name">
                          Stage of set up
                        </span>

                        <span className="ui-form-element__label-description">
                          Are you setting up a branch, transferring or setting
                          up a new entity
                        </span>
                      </label>
                      <div className="ui-form-element__control slds-form-element__control">
                        <input
                          id="text-input-id-1"
                          className="ui-form-element__control-input slds-input"
                          type="text"
                          placeholder="Type something..."
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="form__list-item slds-progress__item">
                  <div className="slds-progress__marker" />
                  <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
                    <div className="ui-form-element slds-form-element">
                      <label
                        className="ui-form-element__label slds-form-element__label"
                        for="text-input-id-1"
                      >
                        <span className="ui-form-element__label-name">
                          Input Label
                        </span>

                        <span className="ui-form-element__label-description">
                          Description of input label here
                        </span>
                      </label>
                      <div className="ui-form-element__control slds-form-element__control">
                        <input
                          id="text-input-id-1"
                          className="ui-form-element__control-input slds-input"
                          type="text"
                          placeholder="Type something..."
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
              <div
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="25"
                role="progressbar"
              >
                <span className="slds-assistive-text">Progress: 25%</span>
              </div>
            </div>
            <div className="ui-form-card__action">
              <span className="ui-form-card__field-steps">
                <span className="ui-form-card__field-steps-focused">0</span>/
                <span className="ui-form-card__field-steps-number">1</span>
              </span>
              <div className="ui-button-group ui-button-group--right">
                <button className="ui-button ui-button--default">Edit</button>
                <button className="ui-button ui-button--primary">
                  Confrim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormCard;
