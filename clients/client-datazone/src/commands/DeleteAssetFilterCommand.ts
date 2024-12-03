// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssetFilterInput } from "../models/models_1";
import { de_DeleteAssetFilterCommand, se_DeleteAssetFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssetFilterCommand}.
 */
export interface DeleteAssetFilterCommandInput extends DeleteAssetFilterInput {}
/**
 * @public
 *
 * The output of {@link DeleteAssetFilterCommand}.
 */
export interface DeleteAssetFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an asset filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteAssetFilterCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteAssetFilterCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // DeleteAssetFilterInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   assetIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssetFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssetFilterCommandInput - {@link DeleteAssetFilterCommandInput}
 * @returns {@link DeleteAssetFilterCommandOutput}
 * @see {@link DeleteAssetFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetFilterCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class DeleteAssetFilterCommand extends $Command
  .classBuilder<
    DeleteAssetFilterCommandInput,
    DeleteAssetFilterCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "DeleteAssetFilter", {})
  .n("DataZoneClient", "DeleteAssetFilterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssetFilterCommand)
  .de(de_DeleteAssetFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetFilterInput;
      output: {};
    };
    sdk: {
      input: DeleteAssetFilterCommandInput;
      output: DeleteAssetFilterCommandOutput;
    };
  };
}
