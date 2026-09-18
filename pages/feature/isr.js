export default function ISRDemo(props) {
   return (
	   <>
	   <div>
		</div>
		  <main>
			<h1 style={{ fontSize: "60px", margin: "20px", textAlign: "center" }}>Incremental Static Regeneration</h1>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (Reload after 10 seconds)
			</h2>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (revalidate interval: 10 seconds)
			</h2>
			<h2 style={{ fontSize: "70px", margin: "20px", textAlign: "center" }}>
			  <div>{props.thought}</div>
			</h2>
			<h2 style={{ fontSize: "40px", margin: "10%", textAlign: "center" }}>
				<a href="/">
					Home
				</a>
			</h2>
		  </main>
	   </>
	);
}

export async function getStaticProps() {
	const ThoughtList = ['"You have to dream before your dreams can come true." – A.P.J Abdul Kalam', 
						'"Life should be great rather than long." – B.R. Ambedkar',
						'“Education is the most powerful weapon which you can use to change the world.” - Nelson Mandela',
						'“Every champion was once a contender that didn’t give up.” ― Gabby Douglas',
			     			'“A little progress each day adds up to big results.” – Satya Nani',
			     			'“Every accomplishment starts with the decision to try.” – Gail Devers',
			     			'“If you can dream it, you can do it.” - Walt Disney',
			     			'“All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.” ― A.P.J. Abdul Kalam',
			     			'“A person who never made a mistake never tried anything new.” — Albert Einstein',
						'“Nothing will work unless you do.” ― Maya Angelou'];
	let index = Math.ceil(Math.random() * 10) % 10;
	return {
		props: {
		  thought: ThoughtList[index],
		},
		revalidate: 10, // In seconds
	}
}

// SIG // Begin signature block
// SIG // MIIo2AYJKoZIhvcNAQcCoIIoyTCCKMUCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // bifdPqRH+V3UKBdVv/7YOYr0oFKSDmf6XFAkDf5u342g
// SIG // gg3DMIIGrTCCBJWgAwIBAgITMwAAANMCiNhpvd8CCQAA
// SIG // AAAA0zANBgkqhkiG9w0BAQwFADBiMQswCQYDVQQGEwJV
// SIG // UzEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MTMwMQYDVQQDEypBenVyZSBSU0EgUHVibGljIFNlcnZp
// SIG // Y2VzIENvZGUgU2lnbmluZyBQQ0EwHhcNMjYwMzA1MTkw
// SIG // NjE5WhcNMjcwMzAzMTkwNjE5WjCBgjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEsMCoGA1UEAxMjQXp1cmUgUHVibGljIFNl
// SIG // cnZpY2VzIFJTQSBDb2RlIFNpZ24wggGiMA0GCSqGSIb3
// SIG // DQEBAQUAA4IBjwAwggGKAoIBgQDJrDsZxGHNBYj5RPkR
// SIG // yGEIGZlcCQkqE7SdGa6c2FPAMGu1JLqHur8qNWjR5swe
// SIG // kMMn0WSz2+QE0c848wHvqVVLpWV+Un3Q01Dnyzjifae4
// SIG // h+kzhQTUIhX2rKQbGHdqBe7LXyCgkfDrTNLXsI1xAXAw
// SIG // A42Ar+PpVd1ktqLSsM6pwqrM/FFfEizl9h5gtrEIZODp
// SIG // +jo9vESxKvHGp/Ifca7e/IluDeJffP4ME/fFtUzUCLH/
// SIG // IweugiUcsaTmewSny4odYLtmZK/zpBuPjGTLpUnn4HMy
// SIG // WXLUSOFlgvFrLKCPZxbNxXxBo5EUquzrFbpg9NmQVipJ
// SIG // QsKDSKNHluTwNicItFpZpiPMc7Y2LG11dNAil3yJEBLF
// SIG // MQ/5RqQptcWmgSKoG8Tx7x+RCYQj4Sjl2yJt+4OykVn9
// SIG // /kQ5wo6v6TmIHHZsKdmgIkMCKBuIRcB2FaGwLY+UGMP1
// SIG // xmiwIaekgjUgVwXX8Kv/2SYI9XXrjyUME4NLj0JTBIO7
// SIG // YX201gYYOL8CAwEAAaOCAbkwggG1MA4GA1UdDwEB/wQE
// SIG // AwIHgDAfBgNVHSUEGDAWBggrBgEFBQcDAwYKKwYBBAGC
// SIG // N1sBATAdBgNVHQ4EFgQU6DIfaqBAAm33/QFJGYifZUeQ
// SIG // B3AwRQYDVR0RBD4wPKQ6MDgxHjAcBgNVBAsTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEWMBQGA1UEBRMNNDY5OTgx
// SIG // KzUwNzE4MTAfBgNVHSMEGDAWgBTxL7qRFnzefVInMfV6
// SIG // +9VYWWk6PTBvBgNVHR8EaDBmMGSgYqBghl5odHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9BenVy
// SIG // ZSUyMFJTQSUyMFB1YmxpYyUyMFNlcnZpY2VzJTIwQ29k
// SIG // ZSUyMFNpZ25pbmclMjBQQ0EuY3JsMHwGCCsGAQUFBwEB
// SIG // BHAwbjBsBggrBgEFBQcwAoZgaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jZXJ0cy9BenVyZSUyMFJT
// SIG // QSUyMFB1YmxpYyUyMFNlcnZpY2VzJTIwQ29kZSUyMFNp
// SIG // Z25pbmclMjBQQ0EuY3J0MAwGA1UdEwEB/wQCMAAwDQYJ
// SIG // KoZIhvcNAQEMBQADggIBAKJEWoxuo4PDUOPrpeqZZBdc
// SIG // EBjIoYQZjSvEIMTd0fcf89rWN/fr6cbAs3fZtR1LQ2kR
// SIG // Wo2mYixmAQpm6ijAYu3Qg+/NIHofviOVCDqHmaQGEiwi
// SIG // oBsb7Et9V7B9rqsksJslTyCJUJYuIXaKv37suPC7cFpX
// SIG // aaWaNLn0juz1sPKdklvTO23fwcahgRO9nqd9gTi9j6dw
// SIG // /nEJURWo32dl+rxdylnuRd6RHpkJKdlPVXRrr/ZL8sby
// SIG // akoCUN4zNVivUMLmUspYRJIV2TpkZonQnrmTm6TpXGVg
// SIG // Cjj56duTzVa/GRAKLVBHNm8je6esjgoswv6eHmYkmgJR
// SIG // jvZ+eHNloLnXfqByg3CxJ0Gd+nja5RTavYplIc9zfOgq
// SIG // Ng5e6NW8E0Q/AI115WfpM+ncWenWqdPs1YLinyUdRDxi
// SIG // DTmhYTyN1p3FojGtyM+mrQVIvC2l8zQr/LNCTvz/dj2h
// SIG // WqsF/7SDnK4wE812YAp6pPfgtr6BfVD0LMJu+s6f2PXe
// SIG // oLskA4Ac2PoJz5N7FmeY7Wn5shZBf4hOqCJssd5ZBpUb
// SIG // tGYh3iCnQSJP9EokoxVxe7D5HmkqTRNnXqIDQ5zW6bL3
// SIG // SDCYFEG5EWtqV9Ytd0Mjplx/s5+w1TnYbXIKbPzi4Hnb
// SIG // 3Xr0m8YnMuVyhmxGyHZ2CjMpQclgocs2QNsOyr7evLGD
// SIG // MIIHDjCCBPagAwIBAgITMwAAAAKyxJOIeFns0wAAAAAA
// SIG // AjANBgkqhkiG9w0BAQwFADBbMQswCQYDVQQGEwJVUzEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSww
// SIG // KgYDVQQDEyNNaWNyb3NvZnQgUlNBIFNlcnZpY2VzIFJv
// SIG // b3QgQ0EgMjAyMTAeFw0yMTA5MDIxNzQxMTlaFw0zNjA5
// SIG // MDIxNzUxMTlaMGIxCzAJBgNVBAYTAlVTMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMzAxBgNVBAMT
// SIG // KkF6dXJlIFJTQSBQdWJsaWMgU2VydmljZXMgQ29kZSBT
// SIG // aWduaW5nIFBDQTCCAiIwDQYJKoZIhvcNAQEBBQADggIP
// SIG // ADCCAgoCggIBAKXd/Sy91nFgseVJOFgeRhVxrcahyp1Y
// SIG // GSN0FpOEgEREVb3ND/QgI7I0yd7XG6OE8Vomr5FMxvK8
// SIG // TvJ4Lc6LP9BDz2GSa1M0LlzHKX757/24C0ZndzccA1qQ
// SIG // i00+BmmOr4plmxRzTFv4Phdw8yBPF9GDvClqV8ASvvbi
// SIG // tfjaD7dVPOFLb7N7fvt/qWogGN5eis0FXCqVJdmPZZaX
// SIG // 2h4iG0otsAhfq8yvSlJ0YwO4i5GDeLQwTsMN1Rf2UAHQ
// SIG // KCUYkFsLSQ0mqbaRbDZhB+2pFL/q/c2a6hlHLnapYyfw
// SIG // lNFXkDhwAFWEzfwFHER2oR42UayfN9tsO/p2tWk33Crn
// SIG // HdndJDrIZ6oQ3D+Ngol/TR8BAgXCIM6se6YlLDTsxRwh
// SIG // 9QUDq7KVhKy58HGKJUqwgIW0E7cvlzUl0Hft/ebhALZy
// SIG // FDkhof9C5Cq4c/486XLjQq0nbuKsFNhQU0yvABR3eohw
// SIG // 63Kps66Uma48oE0JmqOxmzrPvrITYcsnByKleiHn+4yq
// SIG // +Ts/KrtqkQwQcuikMPrZwXCtsYkxMUyUn8gr8oew22WD
// SIG // eIQECAM1Cz9TcdJadsrToKqXQa2bAn/AABAYyogPPONf
// SIG // GvojTI3DlYD42etMa/gPeZJavX+z7x8d/4eYBnJ9WFSi
// SIG // 9q0v+vLOGc3fyM2KQtq5eVbHX5rVyWc6bJ35AgMBAAGj
// SIG // ggHCMIIBvjAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4E
// SIG // FgQU8S+6kRZ83n1SJzH1evvVWFlpOj0wVAYDVR0gBE0w
// SIG // SzBJBgRVHSAAMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBv
// SIG // c2l0b3J5Lmh0bTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBi
// SIG // AEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB
// SIG // /zAfBgNVHSMEGDAWgBQODLFkab0tsdVrJqZH6lZOgMPt
// SIG // ijBmBgNVHR8EXzBdMFugWaBXhlVodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQl
// SIG // MjBSU0ElMjBTZXJ2aWNlcyUyMFJvb3QlMjBDQSUyMDIw
// SIG // MjEuY3JsMHMGCCsGAQUFBwEBBGcwZTBjBggrBgEFBQcw
// SIG // AoZXaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNyb3NvZnQlMjBSU0ElMjBTZXJ2aWNl
// SIG // cyUyMFJvb3QlMjBDQSUyMDIwMjEuY3J0MA0GCSqGSIb3
// SIG // DQEBDAUAA4ICAQBin7PMBnXjnIJ0x++LnudLDWWnZ8dZ
// SIG // mJ14DuZfUss/doUThLAM4crrHaTbJoulUUELNd2AnOpX
// SIG // /Z4tenUMT3sjYIdPYyJfIYWPRqfI6Nbz+JVK7RRvn2nl
// SIG // 5EEMIuRE6UKS9ZGBbf02a7sb04E/7BN/NhhrmtS/tVFj
// SIG // fRrrVh9zXku45rqWuCwUTzg3EqxKQ8OGbtjBQtq/Syb/
// SIG // clm5BHsoh3XhMnb9VLv3G1duNf90FL5/o88XZ4L18nx1
// SIG // lfky2nllY4HIA8PK8AarqAW4iKSTA3EGqn8s/47WtQKT
// SIG // +qED2YbZXVOYL+L7vQDCnFbwhgAx6ucuMz7Ae1rqibg3
// SIG // AjsC7U5M3oA/vqAHDKDA3mdM5D6L/ZEdQgaG20HhUOSQ
// SIG // +CiQD3TyHSiVCfVMuTv83IiKCni3LW/23tHC2tbN57rl
// SIG // hMcoyjIi+IVd7j7s41MFBaDwJrmfXn/YM+lR/5QqvO7z
// SIG // WAbbr/XU531v3jr/jBilmrqt6U/b7y8TXyA9nYxV9iSM
// SIG // FmcbyIi2xgdcAHhxnpXcvcvyFWET6YiJiyeSJZwwJv8g
// SIG // wXiBF+Zh0IHArl6KVsbAdsATuP1TCEBpPynXZmkviIEW
// SIG // Ptnv315ZjTC7nPoOpSnOVaO7wZztrOefZunI5fBxw7mG
// SIG // 1oyoRnADZawiFsVo9J/cDu15ErRCfDQRhwSiBTGCGm0w
// SIG // ghppAgEBMHkwYjELMAkGA1UEBhMCVVMxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEzMDEGA1UEAxMq
// SIG // QXp1cmUgUlNBIFB1YmxpYyBTZXJ2aWNlcyBDb2RlIFNp
// SIG // Z25pbmcgUENBAhMzAAAA0wKI2Gm93wIJAAAAAADTMA0G
// SIG // CWCGSAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgor
// SIG // BgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEE
// SIG // AYI3AgEVMC8GCSqGSIb3DQEJBDEiBCABDVM22EToh7Eo
// SIG // NDtV8sE/LZRTozC6hoEudryDugIBtzBCBgorBgEEAYI3
// SIG // AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAY
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3
// SIG // DQEBAQUABIIBgI9WvFa56ttsheN0jgg9fU06eZcfW+w/
// SIG // 2jfTvCVO/xU0YEVSEazJl3B+TlzDdHcO19qdvtL9Ltm8
// SIG // z2pDAnPd3ih2IF6SgKcUUVjhvceXN2aEpbSWPuw6XoFW
// SIG // 5aLiZl20rVtq/vE9of0gT46d1805xK/Q1Z8JkngPMs01
// SIG // sqsCU3TiKKGlaHxdfc1F1y3Mhu0bTfZBEplPfLxu8/hI
// SIG // 2EjiWet6obX6WSFzC9xOgY4XKZ2j4P+RWdcJSfamGcJE
// SIG // Pel0t05Zio5EDvYLjv2rZ6+IRnMj4T+bxF97bHM7bIhz
// SIG // zWEnO48kLHu0RZrahIb9eZIfTmNL4WwcZSNwMrA2TPr+
// SIG // 7TWS8MErbwKUEL7L+P7osI5zxrdqH9yveRg96Xsg4U18
// SIG // /kApG2hstSErrherK19hr2s1hH0ill2r3DexomzpKaCl
// SIG // QTLB1jF8rMRfzRi17FXRKl/JwRRURmtvD7uN6qiGRVPR
// SIG // TKfV27XodUd1JieqPomICHvLaYW3a4l6hMNrvnus6KGC
// SIG // F5QwgheQBgorBgEEAYI3AwMBMYIXgDCCF3wGCSqGSIb3
// SIG // DQEHAqCCF20wghdpAgEDMQ8wDQYJYIZIAWUDBAIBBQAw
// SIG // ggFSBgsqhkiG9w0BCRABBKCCAUEEggE9MIIBOQIBAQYK
// SIG // KwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCAYGDLu
// SIG // 7tNuaUxlGw8qgvqSnMT3o6a/3OvlXaY2RRu55AIGag0v
// SIG // cxqPGBMyMDI2MDUyMDA3NDIyOC4yMTlaMASAAgH0oIHR
// SIG // pIHOMIHLMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSUwIwYDVQQL
// SIG // ExxNaWNyb3NvZnQgQW1lcmljYSBPcGVyYXRpb25zMScw
// SIG // JQYDVQQLEx5uU2hpZWxkIFRTUyBFU046QTkzNS0wM0Uw
// SIG // LUQ5NDcxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2WgghHqMIIHIDCCBQigAwIBAgITMwAA
// SIG // AifVwIPDsS5XLQABAAACJzANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0yNjAy
// SIG // MTkxOTQwMDRaFw0yNzA1MTcxOTQwMDRaMIHLMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQg
// SIG // QW1lcmljYSBPcGVyYXRpb25zMScwJQYDVQQLEx5uU2hp
// SIG // ZWxkIFRTUyBFU046QTkzNS0wM0UwLUQ5NDcxJTAjBgNV
// SIG // BAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2Uw
// SIG // ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDi
// SIG // xWy1fDOSL4qj3A1pady+elIDLwnF3UuLzJIOWwGHcEgr
// SIG // xxwtnyviUIDmmxylTUl1u+2rBPp2zT4BwwQhvGaJpExq
// SIG // vPLlDFlbfmSflKI86eFqofiZ7j8NTRO4l7wGg9Njm+mu
// SIG // NauTcFW2qdfIjKE950Okrm9MnMOGYy+fibNYdxTPRPq1
// SIG // T4MLZK3s3vdMyMEOldcOQkSKpxD6/1Gk6gOmCu2KgI8f
// SIG // 0ex6vYxnKDl9W0OLSEa/6y82oIbsm+1QBifOQ47xWKTG
// SIG // 1CmvtGr85LzA75/MAcUmRw5/of/qET0UFV1WulMcJrI6
// SIG // DASAsNCNB+6WLrotuBZAj+VMlqbn5RMZ6Q4IY7JwaAiI
// SIG // Xh7VjxrnwUOYZG8WEGhfrA98di+7LEn9AqvvEOyG+UQc
// SIG // jVhCCbMGXigJXSApeyeWupCsD0jgQMNCxfB5BLBDWxgd
// SIG // Y3dJBEPgxfkgTDQLBggtVv2d5CYxHKgIItB4bI5eSb5j
// SIG // kIG2WotnFetT0legpw/Eozwf39ao6tENY21eVWIzRw/G
// SIG // smvwjYQF6vVrxOD0pGVsfqGF8s3VPeY7hI2TxHFMqNA0
// SIG // IB/a2NLY7JTxYAKAP/11EJZt7xbqDLMgD1YDdGEzGpQi
// SIG // jm3nAPCL2CebP/jmu90abJ2W425yglGHTI/nCBrwSpfR
// SIG // CgwzrfFelJaCKM6+35aFfwIDAQABo4IBSTCCAUUwHQYD
// SIG // VR0OBBYEFNLW58N4MGSG6ud7jWqgT92orfReMB8GA1Ud
// SIG // IwQYMBaAFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMF8GA1Ud
// SIG // HwRYMFYwVKBSoFCGTmh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9wa2lvcHMvY3JsL01pY3Jvc29mdCUyMFRpbWUt
// SIG // U3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNybDBsBggrBgEF
// SIG // BQcBAQRgMF4wXAYIKwYBBQUHMAKGUGh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljcm9z
// SIG // b2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSku
// SIG // Y3J0MAwGA1UdEwEB/wQCMAAwFgYDVR0lAQH/BAwwCgYI
// SIG // KwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQAqncud4PSC1teb2H6nRuy7sDiKK13F
// SIG // XJirVB4Tfwjdo2Mb+QL4j7wZ/k4G9P0CANHZFrDQcK0V
// SIG // FDTysrYu8Z0Aha14acDZPsyIoPvAGRRhaHEuf7NckRjk
// SIG // fa/ylo1KyII8jbL9N9sJAqBPL8V4FNBjljv+1GHDOw12
// SIG // 7rZz5ZSTPoAPb2SA0v5yDgcpUMfxglPyp6cnPPoQpTtD
// SIG // 9OGx8Dwm2P+o1TPxBIy6I0T9RauulogVCvKwflfeLTcK
// SIG // AvnSG1rCjerSXmU1DNXOsAD/bsrSjgbX5mAbD7XTRMF/
// SIG // vawAWESFcn/BjjizxeWZb00aYSlkJA2rVtFlMM481aVW
// SIG // XdAbXPP5RzUiWTlgyHf/G7lCxHYWGIZuB13T3aI6Y8mE
// SIG // gn/ou40aiFJo8r0+i0P5GdNneWtxiR0CMKUfko+5s/73
// SIG // cwe1Wfp8BKXa270cicVQasFf5sRV7pFm+V7fNRXwCu7a
// SIG // nTOmga76zO7/2t+zOlibvphT+Q6Zd+B2qYsSn4xBaY+Y
// SIG // zHpnycLW5cvJyhPxBCcb1oRYfhRzCADb2utI2EtGCjc2
// SIG // P2ii4LyR4QMb/n8cOweL9IqVTKKzzVk+zZJxV3vrp4Ly
// SIG // uQXw0O30la6BcHdNAAAB9UC83zs3G9d+AlIfZLM97tMU
// SIG // NKWjbBpIirFx6LTDFXVtZQd7hqzLYByjbjH0ujCCB3Ew
// SIG // ggVZoAMCAQICEzMAAAAVxedrngKbSZkAAAAAABUwDQYJ
// SIG // KoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // MjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmlj
// SIG // YXRlIEF1dGhvcml0eSAyMDEwMB4XDTIxMDkzMDE4MjIy
// SIG // NVoXDTMwMDkzMDE4MzIyNVowfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwggIiMA0GCSqGSIb3DQEBAQUAA4IC
// SIG // DwAwggIKAoICAQDk4aZM57RyIQt5osvXJHm9DtWC0/3u
// SIG // nAcH0qlsTnXIyjVX9gF/bErg4r25PhdgM/9cT8dm95VT
// SIG // cVrifkpa/rg2Z4VGIwy1jRPPdzLAEBjoYH1qUoNEt6aO
// SIG // RmsHFPPFdvWGUNzBRMhxXFExN6AKOG6N7dcP2CZTfDlh
// SIG // AnrEqv1yaa8dq6z2Nr41JmTamDu6GnszrYBbfowQHJ1S
// SIG // /rboYiXcag/PXfT+jlPP1uyFVk3v3byNpOORj7I5LFGc
// SIG // 6XBpDco2LXCOMcg1KL3jtIckw+DJj361VI/c+gVVmG1o
// SIG // O5pGve2krnopN6zL64NF50ZuyjLVwIYwXE8s4mKyzbni
// SIG // jYjklqwBSru+cakXW2dg3viSkR4dPf0gz3N9QZpGdc3E
// SIG // XzTdEonW/aUgfX782Z5F37ZyL9t9X4C626p+Nuw2TPYr
// SIG // bqgSUei/BQOj0XOmTTd0lBw0gg/wEPK3Rxjtp+iZfD9M
// SIG // 269ewvPV2HM9Q07BMzlMjgK8QmguEOqEUUbi0b1qGFph
// SIG // AXPKZ6Je1yh2AuIzGHLXpyDwwvoSCtdjbwzJNmSLW6Cm
// SIG // gyFdXzB0kZSU2LlQ+QuJYfM2BjUYhEfb3BvR/bLUHMVr
// SIG // 9lxSUV0S2yW6r1AFemzFER1y7435UsSFF5PAPBXbGjfH
// SIG // CBUYP3irRbb1Hode2o+eFnJpxq57t7c+auIurQIDAQAB
// SIG // o4IB3TCCAdkwEgYJKwYBBAGCNxUBBAUCAwEAATAjBgkr
// SIG // BgEEAYI3FQIEFgQUKqdS/mTEmr6CkTxGNSnPEP8vBO4w
// SIG // HQYDVR0OBBYEFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMFwG
// SIG // A1UdIARVMFMwUQYMKwYBBAGCN0yDfQEBMEEwPwYIKwYB
// SIG // BQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTATBgNVHSUE
// SIG // DDAKBggrBgEFBQcDCDAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2UkFvX
// SIG // zpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYIKwYB
// SIG // BQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jvb0Nl
// SIG // ckF1dF8yMDEwLTA2LTIzLmNydDANBgkqhkiG9w0BAQsF
// SIG // AAOCAgEAnVV9/Cqt4SwfZwExJFvhnnJL/Klv6lwUtj5O
// SIG // R2R4sQaTlz0xM7U518JxNj/aZGx80HU5bbsPMeTCj/ts
// SIG // 0aGUGCLu6WZnOlNN3Zi6th542DYunKmCVgADsAW+iehp
// SIG // 4LoJ7nvfam++Kctu2D9IdQHZGN5tggz1bSNU5HhTdSRX
// SIG // ud2f8449xvNo32X2pFaq95W2KFUn0CS9QKC/GbYSEhFd
// SIG // PSfgQJY4rPf5KYnDvBewVIVCs/wMnosZiefwC2qBwoEZ
// SIG // QhlSdYo2wh3DYXMuLGt7bj8sCXgU6ZGyqVvfSaN0DLzs
// SIG // kYDSPeZKPmY7T7uG+jIa2Zb0j/aRAfbOxnT99kxybxCr
// SIG // dTDFNLB62FD+CljdQDzHVG2dY3RILLFORy3BFARxv2T5
// SIG // JL5zbcqOCb2zAVdJVGTZc9d/HltEAY5aGZFrDZ+kKNxn
// SIG // GSgkujhLmm77IVRrakURR6nxt67I6IleT53S0Ex2tVdU
// SIG // CbFpAUR+fKFhbHP+CrvsQWY9af3LwUFJfn6Tvsv4O+S3
// SIG // Fb+0zj6lMVGEvL8CwYKiexcdFYmNcP7ntdAoGokLjzba
// SIG // ukz5m/8K6TT4JDVnK+ANuOaMmdbhIurwJ0I9JZTmdHRb
// SIG // atGePu1+oDEzfbzL6Xu/OHBE0ZDxyKs6ijoIYn/ZcGNT
// SIG // TY3ugm2lBRDBcQZqELQdVTNYs6FwZvKhggNNMIICNQIB
// SIG // ATCB+aGB0aSBzjCByzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEl
// SIG // MCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0
// SIG // aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkE5
// SIG // MzUtMDNFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNloiMKAQEwBwYFKw4DAhoD
// SIG // FQAjHzqthPwO0GDckDMA6x54lIiMKqCBgzCBgKR+MHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMA0GCSqGSIb3
// SIG // DQEBCwUAAgUA7bet7jAiGA8yMDI2MDUyMDAzNTAwNloY
// SIG // DzIwMjYwNTIxMDM1MDA2WjB0MDoGCisGAQQBhFkKBAEx
// SIG // LDAqMAoCBQDtt63uAgEAMAcCAQACAgClMAcCAQACAhKg
// SIG // MAoCBQDtuP9uAgEAMDYGCisGAQQBhFkKBAIxKDAmMAwG
// SIG // CisGAQQBhFkKAwKgCjAIAgEAAgMHoSChCjAIAgEAAgMB
// SIG // hqAwDQYJKoZIhvcNAQELBQADggEBAHiywa5X104ukRIp
// SIG // E8SNlwkZXglF0U4U2uYpjMovFy1/qTmFlWR2x9O7iyPz
// SIG // Zw1BE9GdadMxpPE7vIwerRpu5Who2jICzTNZTLqGb2gj
// SIG // 9Mry8cdgdvflUlKlqjqhCh/UCYegAOAU50bXh8hd6Ch7
// SIG // vxNjTAdynvF8u6usPqFtKcf0wUDOZ8nT6BOe5MNCpiKb
// SIG // LNBSfa7xW3qlTBYISIeUJnPC9olwVrGwB8LY+gs7UXS4
// SIG // 2ABWrmDhCnauijr83YJA3nY3gx4CchRtYpRrPpnXbbP+
// SIG // wzemR69aB2YbAilszbOwWspArC/ftyjlkhn6C86w00WN
// SIG // MFnMypoTmicM4LQuIW0xggQNMIIECQIBATCBkzB8MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAifVwIPD
// SIG // sS5XLQABAAACJzANBglghkgBZQMEAgEFAKCCAUowGgYJ
// SIG // KoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEEMC8GCSqGSIb3
// SIG // DQEJBDEiBCBVOnUDH9mwgLSxZ+8HwEXQuGFdmBn9VsNv
// SIG // moSYm0XPFzCB+gYLKoZIhvcNAQkQAi8xgeowgecwgeQw
// SIG // gb0EIOXnARo1oVIcOLJKDqlE0adq/jZ9TXdlnXWRcXGT
// SIG // hBFyMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEm
// SIG // MCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // IDIwMTACEzMAAAIn1cCDw7EuVy0AAQAAAicwIgQgR6mQ
// SIG // eB/65eptlZIH0v/ER9zgMOE5cN5EUwc+KsiX6yEwDQYJ
// SIG // KoZIhvcNAQELBQAEggIAN+4k1sle5qsNFFXoKCnJ9pNP
// SIG // yxnwrQrY1IWPcHEtlX8DegtXYvSzF4ElUkYuui9af2C6
// SIG // 5Xb+Lzl801mxctK/WMNmhLVQpd2crmwIs3bfv6jDfCHH
// SIG // GsarHU4bkZ1sZ+y78dRM62EFrbie67+4Ml60ZXI4dDxq
// SIG // NmP4Oi6kcALXQ+lZsTvZhofRhvpC6pADy46ni1dsgD9E
// SIG // D/6VOQ/E5DAN5Ea8Qvt4AgQ7sXFaj/dU6FHXc9TfTgV6
// SIG // YnL0K6y65m0jaAwSD3WrLtN9OQTuXWVNIdZ/jr/1zmXZ
// SIG // ktrLdn7dAlUrI8ltg82cMA3mITCWGmB5bbjm6at3i0Bl
// SIG // KOXo55dOfKVjwyp+qIRbN9vCLwWSVhpbpQoHPkUi6mDu
// SIG // NFtbt0RkBD4zbeHLjSlY+r6UcutVuntQlFilJUlEJbNW
// SIG // kUPkQcRtUNM7OLXLypHJMYRNBY3tZ1EhlrsI0s+dIeWJ
// SIG // boeq6egY4RurZP/UuPd4Zlp1n7WuSZKqNsk3OJq01gNR
// SIG // 8HQ2iUamiGV3YgNTRspRubtGGY661RcDt4U7vpmZpC9Z
// SIG // jbHCHZCWySxp6gnfbWpmr7n2+wdcE/f0INPR+cwf/oGk
// SIG // vN+hjMGCAYf4LMkJuivG6UZBlLiSWv4/v/x9lSrllmal
// SIG // UOUUP/INYBvWNXSPFD4QHtSl2sP3RAorZo/prRlGdb8=
// SIG // End signature block
