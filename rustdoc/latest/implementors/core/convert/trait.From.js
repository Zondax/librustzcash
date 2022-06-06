(function() {var implementors = {};
implementors["zcash_address"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_address/unified/enum.ParseError.html\" title=\"enum zcash_address::unified::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"zcash_address/enum.ParseError.html\" title=\"enum zcash_address::ParseError\">ParseError</a>","synthetic":false,"types":["zcash_address::encoding::ParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_address/unified/enum.Typecode.html\" title=\"enum zcash_address::unified::Typecode\">Typecode</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]}];
implementors["zcash_client_backend"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/sapling/struct.PaymentAddress.html\" title=\"struct zcash_primitives::sapling::PaymentAddress\">PaymentAddress</a>&gt; for <a class=\"enum\" href=\"zcash_client_backend/address/enum.RecipientAddress.html\" title=\"enum zcash_client_backend::address::RecipientAddress\">RecipientAddress</a>","synthetic":false,"types":["zcash_client_backend::address::RecipientAddress"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_primitives/legacy/enum.TransparentAddress.html\" title=\"enum zcash_primitives::legacy::TransparentAddress\">TransparentAddress</a>&gt; for <a class=\"enum\" href=\"zcash_client_backend/address/enum.RecipientAddress.html\" title=\"enum zcash_client_backend::address::RecipientAddress\">RecipientAddress</a>","synthetic":false,"types":["zcash_client_backend::address::RecipientAddress"]},{"text":"impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_primitives/transaction/builder/enum.Error.html\" title=\"enum zcash_primitives::transaction::builder::Error\">Error</a>&gt; for <a class=\"enum\" href=\"zcash_client_backend/data_api/error/enum.Error.html\" title=\"enum zcash_client_backend::data_api::error::Error\">Error</a>&lt;N&gt;","synthetic":false,"types":["zcash_client_backend::data_api::error::Error"]},{"text":"impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ProtobufError&gt; for <a class=\"enum\" href=\"zcash_client_backend/data_api/error/enum.Error.html\" title=\"enum zcash_client_backend::data_api::error::Error\">Error</a>&lt;N&gt;","synthetic":false,"types":["zcash_client_backend::data_api::error::Error"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"zcash_primitives/transaction/components/sapling/trait.Authorization.html\" title=\"trait zcash_primitives::transaction::components::sapling::Authorization\">Authorization</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/transaction/components/sapling/struct.OutputDescription.html\" title=\"struct zcash_primitives::transaction::components::sapling::OutputDescription\">OutputDescription</a>&lt;A&gt;&gt; for <a class=\"struct\" href=\"zcash_client_backend/proto/compact_formats/struct.CompactSaplingOutput.html\" title=\"struct zcash_client_backend::proto::compact_formats::CompactSaplingOutput\">CompactSaplingOutput</a>","synthetic":false,"types":["zcash_client_backend::proto::compact_formats::CompactSaplingOutput"]}];
implementors["zcash_client_sqlite"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"zcash_client_sqlite/error/enum.SqliteClientError.html\" title=\"enum zcash_client_sqlite::error::SqliteClientError\">SqliteClientError</a>","synthetic":false,"types":["zcash_client_sqlite::error::SqliteClientError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"zcash_client_sqlite/error/enum.SqliteClientError.html\" title=\"enum zcash_client_sqlite::error::SqliteClientError\">SqliteClientError</a>","synthetic":false,"types":["zcash_client_sqlite::error::SqliteClientError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"zcash_client_sqlite/error/enum.SqliteClientError.html\" title=\"enum zcash_client_sqlite::error::SqliteClientError\">SqliteClientError</a>","synthetic":false,"types":["zcash_client_sqlite::error::SqliteClientError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"zcash_client_sqlite/error/enum.SqliteClientError.html\" title=\"enum zcash_client_sqlite::error::SqliteClientError\">SqliteClientError</a>","synthetic":false,"types":["zcash_client_sqlite::error::SqliteClientError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_primitives/memo/enum.Error.html\" title=\"enum zcash_primitives::memo::Error\">Error</a>&gt; for <a class=\"enum\" href=\"zcash_client_sqlite/error/enum.SqliteClientError.html\" title=\"enum zcash_client_sqlite::error::SqliteClientError\">SqliteClientError</a>","synthetic":false,"types":["zcash_client_sqlite::error::SqliteClientError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_client_backend/data_api/error/enum.Error.html\" title=\"enum zcash_client_backend::data_api::error::Error\">Error</a>&lt;<a class=\"enum\" href=\"zcash_client_sqlite/enum.NoteId.html\" title=\"enum zcash_client_sqlite::NoteId\">NoteId</a>&gt;&gt; for <a class=\"enum\" href=\"zcash_client_sqlite/error/enum.SqliteClientError.html\" title=\"enum zcash_client_sqlite::error::SqliteClientError\">SqliteClientError</a>","synthetic":false,"types":["zcash_client_sqlite::error::SqliteClientError"]}];
implementors["zcash_extensions"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_extensions/consensus/transparent/enum.ExtensionId.html\" title=\"enum zcash_extensions::consensus::transparent::ExtensionId\">ExtensionId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]}];
implementors["zcash_note_encryption"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 32]</a>&gt; for <a class=\"struct\" href=\"zcash_note_encryption/struct.OutgoingCipherKey.html\" title=\"struct zcash_note_encryption::OutgoingCipherKey\">OutgoingCipherKey</a>","synthetic":false,"types":["zcash_note_encryption::OutgoingCipherKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 32]</a>&gt; for <a class=\"struct\" href=\"zcash_note_encryption/struct.EphemeralKeyBytes.html\" title=\"struct zcash_note_encryption::EphemeralKeyBytes\">EphemeralKeyBytes</a>","synthetic":false,"types":["zcash_note_encryption::EphemeralKeyBytes"]}];
implementors["zcash_primitives"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"zcash_primitives/consensus/struct.BlockHeight.html\" title=\"struct zcash_primitives::consensus::BlockHeight\">BlockHeight</a>","synthetic":false,"types":["zcash_primitives::consensus::BlockHeight"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/consensus/struct.BlockHeight.html\" title=\"struct zcash_primitives::consensus::BlockHeight\">BlockHeight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/consensus/struct.BlockHeight.html\" title=\"struct zcash_primitives::consensus::BlockHeight\">BlockHeight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/consensus/struct.BlockHeight.html\" title=\"struct zcash_primitives::consensus::BlockHeight\">BlockHeight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_primitives/consensus/enum.BranchId.html\" title=\"enum zcash_primitives::consensus::BranchId\">BranchId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/memo/struct.TextMemo.html\" title=\"struct zcash_primitives::memo::TextMemo\">TextMemo</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"zcash_primitives/memo/enum.Memo.html\" title=\"enum zcash_primitives::memo::Memo\">Memo</a>&gt; for <a class=\"struct\" href=\"zcash_primitives/memo/struct.MemoBytes.html\" title=\"struct zcash_primitives::memo::MemoBytes\">MemoBytes</a>","synthetic":false,"types":["zcash_primitives::memo::MemoBytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"enum\" href=\"zcash_primitives/memo/enum.Memo.html\" title=\"enum zcash_primitives::memo::Memo\">Memo</a>&gt; for <a class=\"struct\" href=\"zcash_primitives/memo/struct.MemoBytes.html\" title=\"struct zcash_primitives::memo::MemoBytes\">MemoBytes</a>","synthetic":false,"types":["zcash_primitives::memo::MemoBytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/sapling/struct.Node.html\" title=\"struct zcash_primitives::sapling::Node\">Node</a>&gt; for Scalar","synthetic":false,"types":["bls12_381::scalar::Scalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/sapling/struct.NoteValue.html\" title=\"struct zcash_primitives::sapling::NoteValue\">NoteValue</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/transaction/components/amount/struct.Amount.html\" title=\"struct zcash_primitives::transaction::components::amount::Amount\">Amount</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"zcash_primitives/transaction/components/amount/struct.Amount.html\" title=\"struct zcash_primitives::transaction::components::amount::Amount\">Amount</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/transaction/components/amount/struct.Amount.html\" title=\"struct zcash_primitives::transaction::components::amount::Amount\">Amount</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/transaction/components/sapling/struct.OutputDescription.html\" title=\"struct zcash_primitives::transaction::components::sapling::OutputDescription\">OutputDescription</a>&lt;A&gt;&gt; for <a class=\"struct\" href=\"zcash_primitives/transaction/components/sapling/struct.CompactOutputDescription.html\" title=\"struct zcash_primitives::transaction::components::sapling::CompactOutputDescription\">CompactOutputDescription</a>","synthetic":false,"types":["zcash_primitives::transaction::components::sapling::CompactOutputDescription"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"zcash_primitives/zip32/struct.AccountId.html\" title=\"struct zcash_primitives::zip32::AccountId\">AccountId</a>","synthetic":false,"types":["zcash_primitives::zip32::AccountId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zcash_primitives/zip32/struct.AccountId.html\" title=\"struct zcash_primitives::zip32::AccountId\">AccountId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"zcash_primitives/zip32/struct.ExtendedSpendingKey.html\" title=\"struct zcash_primitives::zip32::ExtendedSpendingKey\">ExtendedSpendingKey</a>&gt; for <a class=\"struct\" href=\"zcash_primitives/zip32/struct.ExtendedFullViewingKey.html\" title=\"struct zcash_primitives::zip32::ExtendedFullViewingKey\">ExtendedFullViewingKey</a>","synthetic":false,"types":["zcash_primitives::zip32::ExtendedFullViewingKey"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()