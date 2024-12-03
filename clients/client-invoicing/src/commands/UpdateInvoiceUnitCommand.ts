// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { UpdateInvoiceUnitRequest, UpdateInvoiceUnitResponse } from "../models/models_0";
import { de_UpdateInvoiceUnitCommand, se_UpdateInvoiceUnitCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInvoiceUnitCommand}.
 */
export interface UpdateInvoiceUnitCommandInput extends UpdateInvoiceUnitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInvoiceUnitCommand}.
 */
export interface UpdateInvoiceUnitCommandOutput extends UpdateInvoiceUnitResponse, __MetadataBearer {}

/**
 * <p>You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, UpdateInvoiceUnitCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, UpdateInvoiceUnitCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * const client = new InvoicingClient(config);
 * const input = { // UpdateInvoiceUnitRequest
 *   InvoiceUnitArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TaxInheritanceDisabled: true || false,
 *   Rule: { // InvoiceUnitRule
 *     LinkedAccounts: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInvoiceUnitResponse
 * //   InvoiceUnitArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateInvoiceUnitCommandInput - {@link UpdateInvoiceUnitCommandInput}
 * @returns {@link UpdateInvoiceUnitCommandOutput}
 * @see {@link UpdateInvoiceUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateInvoiceUnitCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure.
 * </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.
 * </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *     The input fails to satisfy the constraints specified by an Amazon Web Services service.
 * </p>
 *
 * @throws {@link InvoicingServiceException}
 * <p>Base exception class for all service exceptions from Invoicing service.</p>
 *
 * @public
 * @example UpdateInvoiceUnit with all updatable fields
 * ```javascript
 * //
 * const input = {
 *   "Description": "Updated IU description",
 *   "InvoiceUnitArn": "arn:aws:invoicing::000000000000:invoice-unit/12345678",
 *   "Rule": {
 *     "LinkedAccounts": [
 *       "111111111111",
 *       "222222222222"
 *     ]
 *   },
 *   "TaxInheritanceDisabled": false
 * };
 * const command = new UpdateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InvoiceUnitArn": "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example UpdateInvoiceUnit with specific fields
 * ```javascript
 * //
 * const input = {
 *   "Description": "Updated IU description. All other fields remain unchanged",
 *   "InvoiceUnitArn": "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * };
 * const command = new UpdateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InvoiceUnitArn": "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * }
 * *\/
 * // example id: example-2
 * ```
 *
 */
export class UpdateInvoiceUnitCommand extends $Command
  .classBuilder<
    UpdateInvoiceUnitCommandInput,
    UpdateInvoiceUnitCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Invoicing", "UpdateInvoiceUnit", {})
  .n("InvoicingClient", "UpdateInvoiceUnitCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInvoiceUnitCommand)
  .de(de_UpdateInvoiceUnitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInvoiceUnitRequest;
      output: UpdateInvoiceUnitResponse;
    };
    sdk: {
      input: UpdateInvoiceUnitCommandInput;
      output: UpdateInvoiceUnitCommandOutput;
    };
  };
}
