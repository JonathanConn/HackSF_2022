// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract Card is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {

    uint internal level; // level of card
    string internal contactInfo; // stores contract info json
    
    mapping (uint => string) public cardToLevelURI;

    constructor(string memory _contactInfo) ERC1155("") {
        level = 0;
        contactInfo = _contactInfo;
    }

    function upgradeLevel() internal {
        level++;
        _setURI(cardToLevelURI[level]);
    }

    function updateContact(string memory _contactInfo) public onlyOwner {
        contactInfo = _contactInfo;
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
